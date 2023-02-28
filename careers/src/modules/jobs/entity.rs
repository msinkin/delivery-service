use serde::{Deserialize, Serialize};
use sqlx::postgres::types::PgMoney;

// https://docs.rs/sqlx/latest/sqlx/trait.Type.html
#[derive(sqlx::Type, Serialize, Deserialize)]
#[repr(i32)]
pub enum ExperienceType {
    Without, // Без опыта
    Internship, // Стажировка
    From1Year, // От 1 года
    From3Year, // От 3 лет
    From5Year // от 5 лет
}

#[derive(sqlx::Type, Serialize, Deserialize)]
#[repr(i32)]
pub enum ScheduleType {
    FullDay, // Полный день
    Shift, // Сменный
    Flexible // Гибкий
}

#[derive(sqlx::Type, Serialize, Deserialize)]
#[repr(i32)]
pub enum EducationType {
    Higher, // Высшее
    HigherIncomplete, // Высшее неоконченное
    SecondaryVocational, // Среднее профессиональное
    SecondaryGeneral // Среднее общее
}

// read more about types: https://docs.rs/sqlx/latest/sqlx/postgres/types/index.html
#[derive(sqlx::FromRow, Serialize, Deserialize)]
pub struct Job {
    pub id: i64,
    pub post: String, // Должность
    pub description: String, // Описание
    pub address: String, // Адрес
    //pub salary: PgMoney, // Зарплата
    pub remote: bool, // Удалённая работа
    pub schedule: ScheduleType, // График работы
    pub experience: ExperienceType, // Опыт работы
    pub education: EducationType // Опыт работы
}