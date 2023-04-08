// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Packages {
    // Информация о посылке
    struct Package {
        address sender;
        string from; // Откуда
        string to; // Кула
        uint weight; // Вес
        uint worth; // Ценность
    }

    // Статус заказа
    enum OrderStatus {
        Requested, // Подтверждение заказа
        Collecting, // Собираем заказ
        OnTheWay, // Готовим заказ к отправке
        Delivered // Доставлен
    }

    Package[] packages;

    address public owner; // Владелец контракта (Служба доставки)

    modifier onlyOwner() {
        require(msg.sender == owner, "not an owner!");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    // Журнал доставки
    event Delivery(address indexed sender, uint indexed packageId, OrderStatus indexed status, uint time);

    function createPackage(string memory from, string memory to, uint weight, uint worth) public {
		packages.push(Package(msg.sender, from, to, weight, worth));
        emit Delivery(msg.sender, packages.length - 1, OrderStatus.Requested, block.timestamp);
    }

    function updatePackageStatus(uint packageId, OrderStatus status) public {
        emit Delivery(msg.sender, packageId, status, block.timestamp);
    }
}
