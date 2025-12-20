// Паттерн: Map с использованием индекса
// ВАЖНО: map всегда возвращает НОВЫЙ массив. 
// Если нужен просто перебор без создания массива — используй forEach.

const mapWithIndex = () => {
    const fruits = ['apple', 'banana', 'apricot'];
    const descriptions = fruits.map((fruit, index) => {
        return `Fruit ${fruit} stays on position ${index}`;
    });
    return descriptions;
};

console.log(mapWithIndex());

// map нужен, когда ты хочешь создать новый массив (трансформировать данные). Он всегда возвращает массив такой же длины.

// forEach нужен, когда ты хочешь просто выполнить действие для каждого элемента (вывести в консоль, записать в базу данных), и тебе не нужен новый массив.