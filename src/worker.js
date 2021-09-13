import * as Comlink from "comlink";
import { createFFmpeg } from "@ffmpeg/ffmpeg";

const service = { createFFmpeg };

Comlink.expose(service);
