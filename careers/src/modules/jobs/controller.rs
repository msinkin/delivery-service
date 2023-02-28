use actix_web::{web::{ServiceConfig, self}, Responder, HttpResponse, post, get};

use super::{ service::JobService };


pub fn init(cfg: &mut ServiceConfig) {
    cfg.service(get_all);
}

/*
#[post("/register")]
async fn register(form: web::Json<Register>, service: JobService) -> impl Responder {
    if service.create(form.into_inner()).await {
        HttpResponse::Ok().body("registered!")
    } else {
        HttpResponse::Ok().body("error")
    }
}
*/

#[get("/jobs")]
async fn get_all() -> impl Responder {
    match service.find_one(&*username).await {
        Ok(user) => HttpResponse::Ok().json(user),
        Err(e) => HttpResponse::Ok().body(e.to_string())
    }
}