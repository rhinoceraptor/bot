#![recursion_limit = "1024"]
extern crate serde_json;
#[macro_use] extern crate serde_derive;
extern crate serde;
extern crate reqwest;
extern crate toml;
extern crate percent_encoding;
extern crate ctrlc;

pub mod matrix;
pub mod config;
pub mod bot;
pub mod client;

use matrix::matrix::Matrix;
use bot::Bot;

fn main() {
  let file = config::read_config_file("/home/jack/git/bot/config.toml")
    .expect("Unable to read file!");
  let config: config::Config = toml::from_str(&file)
    .expect("Unable to parse config!");

  let auth = config.authentication;
  let mut matrix_client = Matrix::new(auth);

  matrix_client
    .login()
    .expect("Matrix client initialization failed!");

  let bot = Bot::new(config.bot_config, matrix_client)
    .expect("Bot failed to initialize!")
    .run()
    .expect("Failed to set up bot!");
}

