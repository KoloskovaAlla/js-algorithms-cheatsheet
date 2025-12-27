/**
 * Сниппет: Фильтрация по черному списку (Blacklist)
 * Оставляет только те элементы, которых НЕТ в запрещенном наборе.
 * Использование Set() для списка делает поиск мгновенным.
 */

const allUsers = ["alice", "bob", "evil_hacker", "charlie"];
const bannedUsers = new Set(["evil_hacker", "spammer"]);

const activeUsers = () => {
    return allUsers.filter((user) => {
        return !bannedUsers.has(user)
    })
};

console.log(activeUsers()); 
// ["alice", "bob", "charlie"]
