use actix_utils::future::{ok, Ready};
use actix_web::{dev::Payload, FromRequest, HttpRequest, Error, web::Data};
use sqlx::PgPool;

use crate::state::State;

use super::entity::Job;

impl JobService {
    pub fn new(pool: PgPool) -> Self {
        JobService { pool }
    }
    
    pub async fn all(&self) -> Result<Job, sqlx::Error> {
        sqlx::query_as!(
            Job,
            r#"
                SELECT * FROM jobs
            "#
        )
        .fetch_one(&self.pool)
        .await
    }

    pub async fn create(&self, register: Register) -> bool {
        sqlx::query!(
            r#"
                INSERT INTO users (username, email, password) VALUES ($1, $2, $3)
            "#,
            register.username,
            register.email,
            bcrypt::hash(register.password, bcrypt::DEFAULT_COST).unwrap()
        )
        .execute(&self.pool)
        .await
        .is_ok()
    }
}

// TEMPLATE
pub struct JobService {
    pool: PgPool
}

impl FromRequest for JobService {
    type Error = Error;
    type Future = Ready<Result<Self, Self::Error>>;

    fn from_request(req: &HttpRequest, _: &mut Payload) -> Self::Future {
        let state = req.app_data::<Data<State>>().unwrap();

        ok(JobService::new(state.pool.clone()))
    }
}