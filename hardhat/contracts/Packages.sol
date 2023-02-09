// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;


contract Packages {
    // Информация о посылке
    struct Package {
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

    // Журнал доставки
    event Delivery(string indexed track, string from, string to, Package package);

    function createPackage(string memory from, string memory to, uint weight, uint worth) public {
        string memory track = "R783T455X8QD";
        emit Delivery(track, from, to, Package(weight, worth));
    }
}
