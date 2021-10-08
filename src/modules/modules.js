import * as tallerModule from "./tallerModule"

const initializers = {
  tallerModule: tallerModule.initializer,
}

const reducers = {
  tallerModule: tallerModule.reducer,
}

const modules = {
  initializers,
  reducers,
}

export default modules
