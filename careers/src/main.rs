use std::env;

use actix_cors::Cors;
use actix_web::{web, App, HttpServer};
use dotenv::dotenv;
use sqlx::postgres::PgPoolOptions;

use state::State;

mod modules;
mod state;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    dotenv().ok();

    /*let state = web::Data::new(State {
        pool: PgPoolOptions::new()
            .connect(&env::var("DATABASE_URL").unwrap())
            .await
            .unwrap(),
    });*/

    HttpServer::new(move || {
        App::new()
            .wrap(Cors::permissive())
            //.app_data(state.clone())
            .configure(modules::init)
    })
    .bind(("0.0.0.0", 8080))?
    .run()
    .await
}
