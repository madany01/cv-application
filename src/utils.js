import { nanoid } from 'nanoid'

function createEmptyEducationalData() {
  return {
    id: nanoid(),
    program: '',
    organization: '',
    fromDate: '',
    toDate: '',
    description: '',
  }
}

function createEmptyPracticalData() {
  return {
    id: nanoid(),
    company: '',
    jobTitle: '',
    fromDate: '',
    toDate: '',
    description: '',
  }
}

function createPersonalData() {
  return {
    id: nanoid(),
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  }
}

function createEmptyData() {
  return {
    personal: createPersonalData(),
    educational: [createEmptyEducationalData()],
    practical: [createEmptyPracticalData()],
  }
}

function createBoundedFunctions(types, fn) {
  return Object.fromEntries(types.map(type => [type, (...args) => fn(type, ...args)]))
}

export {
  createPersonalData,
  createEmptyEducationalData,
  createEmptyPracticalData,
  createEmptyData,
  createBoundedFunctions,
}
