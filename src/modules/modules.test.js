import * as module from './modules'

it('returns the total amount of initializers defined', () => {
  const initializers = module.default.initializers
  const quantityOfInitializers = Object.keys(initializers).length
  expect(quantityOfInitializers).toBe(1)
})

it('returns the total amount of reducers defined', () => {
  const reducers = module.default.reducers
  const quantityOfReducers = Object.keys(reducers).length
  expect(quantityOfReducers).toBe(1)
})
