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

function createEmptyData() {
  return {
    personal: {
      id: nanoid(),
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
    },
    educational: [createEmptyEducationalData()],
    practical: [createEmptyPracticalData()],
  }
}

function createBoundedFunctions(types, fn) {
  return Object.fromEntries(types.map(type => [type, (...args) => fn(type, ...args)]))
}

export {
  createEmptyData,
  createEmptyEducationalData,
  createEmptyPracticalData,
  createBoundedFunctions,
}
