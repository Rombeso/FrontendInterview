// Объект, представляющий информацию о пользователе
type UserItem = {
    id: number;
    userName: string;
};

// Объект, представляющий информацию о заказе
type Order = {
    orderId: number;
    amount: number;
};

// Пересечение типов User и Order
type UserOrder = UserItem & Order;

const user = {
    id: 2,
    userName: 'Jhon'
}

const order = {
    orderId: 23,
    amount: 3321,
};


const userOrder = { ...user, ...order };

// Функция, которая принимает объект User и возвращает строку
function greetUser(userOrder: UserOrder): string {
    return `Hello, ${userOrder.userName}, your order is ${userOrder.orderId}!`;
}

greetUser(userOrder)

// --------------- Generics

function reverseArray<T>(array: T[]): T[] {
    return array.reverse();
}
const numbers = [1, 2, 3, 4, 5]
const fruits = ["apple", "banana", "orange"]
const reversedNumbers = reverseArray<number>(numbers);
const reversedStrings = reverseArray<string>(fruits);

// -------------- Enum
enum OrderStatus {
    Pending = "pending",
    Processing = "processing",
    Delivered = "delivered"
}

interface OrderItem {
    orderId: number
    status: OrderStatus
}

// Функция для вывода информации о заказе
function printOrderInfo(orderItem: OrderItem): string {
    return `Order ID: ${orderItem.orderId}, Status: ${orderItem.status}`;
}

// Создание объекта заказа
const orderItem: OrderItem = {
    orderId: 23456,
    status: OrderStatus.Pending
};

// Вывод информации о заказе
printOrderInfo(orderItem);

// --------------- Promise

interface User {
    id: number;
    username: string;
}

// Функция для загрузки пользователя по ID
async function fetchUserById(id: number): Promise<User> {
    // Здесь обычно происходит асинхронный запрос к серверу или базе данных
    return new Promise<User>((resolve, reject) => {
        // Имитируем задержку запроса в 1 секунду
        setTimeout(() => {
            const user: User = {
                id,
                username: `user${id}`
            };
            resolve(user);
        }, 1000);
    });
}

// ----- callbackType
// Типизация для колбэка, принимающего строку и возвращающего число
type CallbackFunction = (str: string) => number;

// Функция, которая принимает колбэк и применяет его к строке
function processString(str: string, callback: CallbackFunction): void {
    const result = callback(str);
    console.log(`Processed string: ${str}, Result: ${result}`);
}

// Пример использования функции с колбэком
function stringLength(str: string): number {
    return str.length;
}

// Вызов функции processString с колбэком stringLength
processString("Hello, world!", stringLength);