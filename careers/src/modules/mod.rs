use actix_web::web::ServiceConfig;

mod jobs;

pub fn init(cfg: &mut ServiceConfig) {
    cfg.configure(jobs::controller::init);
}
