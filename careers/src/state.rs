use sqlx::PgPool;

/// App state
pub struct State {
    pub pool: PgPool,
}
