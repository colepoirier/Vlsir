//!
//! # Build Module
//!
//! Primarily expands protobuf definitions, adding a number of annotations.
//!

use prost_build;
use protox;

fn main() {
    // Create the Prost config
    let mut config = prost_build::Config::new();

    // Add serde traits
    config.type_attribute(
        ".",
        "#[derive(serde_derive::Serialize, serde_derive::Deserialize)]",
    );

    // Add our custom annotations
    // config.type_attribute("example", "#[serde(tag = \"type\")]");
    // config.field_attribute("example", "#[serde(flatten)]");

    // And build!
    let src = [
        "protos/utils.proto",
        "protos/raw.proto",
        "protos/circuit.proto",
        "protos/tetris.proto",
        "protos/spice.proto",
    ];
    let file_descriptors = protox::compile(src, ["protos/"]).unwrap();
    config.compile_fds(file_descriptors).unwrap();
}
