// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Packages {
    // Информация о посылке
    struct Package {
        address sender; // Отправитель
        address deliveryman; // Доставщик
        address reciver; // Получатель
        bool delivered; // Подтверждёние со стороны доставщика
        bool verified; // Подтверждёние со стороны получателя
        string from; // Откуда
        string to; // Кула
        uint weight; // Вес
        uint worth; // Ценность
    }

    // Статус заказа
    enum OrderStatus {
        Requested, // Подтверждение заказа
        Collecting, // Собираем заказ
        OnTheWay, // В пути
        Delivered, // Доставлен
        Verified // Подтверждён получателем
    }

    Package[] packages;

    address public owner; // Владелец контракта (Служба доставки)

    modifier onlyOwner() {
        require(msg.sender == owner, "Not an owner!");
        _;
    }

    mapping (address => uint[]) private _packages;

    constructor() {
        owner = msg.sender;
    }

    // Журнал доставки
    event Delivery(address indexed sender, uint indexed packageId, OrderStatus indexed status, uint time);

    function createPackage(address reciver, string memory from, string memory to, uint weight, uint worth) public payable returns(uint) {
        require(msg.value == (weight * 0.0006 ether) + (worth * 0.0006 ether), "The transaction amount differs from the cost");

		packages.push(Package(msg.sender, 0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199, reciver, false, false, from, to, weight, worth));
        uint count = packages.length - 1;
        emit Delivery(msg.sender, count, OrderStatus.Requested, block.timestamp);
        _packages[msg.sender].push(count);
        return count;
    }

    function getPackage(uint packageId) external view returns(Package memory) {
        return packages[packageId];
    }

    function getMyPackages() external view returns(uint[] memory) {
        return _packages[msg.sender];
    }

    // Функция для подтверждения доставки получателем
    function verifyPacakge(uint packageId) public {
        Package storage pkg = packages[packageId];
        require(msg.sender == pkg.reciver, "You are not a reciver");
        require(pkg.delivered, "Package not delivered");
        require(!pkg.verified, "Package already verified");
        
        pkg.verified = true;
        
        emit Delivery(msg.sender, packageId, OrderStatus.Verified, block.timestamp);
    }

    // Функция для обновления статуса доставщиком
    function updatePackageStatus(uint packageId, OrderStatus status) public {
        Package storage pkg = packages[packageId];
        require(msg.sender == pkg.deliveryman, "You are not a deliveryman");
        require(status != OrderStatus.Verified, "Use verifyPackage function to do that");
        require(!pkg.delivered, "Package locked");
        
        if (status == OrderStatus.Delivered) pkg.delivered = true;
        
        emit Delivery(msg.sender, packageId, status, block.timestamp);
    }
}
