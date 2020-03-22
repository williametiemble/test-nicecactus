expect.extend({
  toBeType (received, argument) {
    // Internal function for Pure Object / Array Object / Element Object distinction
    const getType = (received) => {
      const initialType = typeof received
      let type = initialType === 'object' ? Array.isArray(received) ? 'array' : initialType : initialType
      if (type === 'object') {
        if (received instanceof Element) {
          type = 'element'
        }
        if (received == null) {
          type = null
        }
      }
      return type
    }

    let type = getType(received)
    let pass
    let arg
    if (Array.isArray(argument)) {
      pass = argument.includes(type)
      arg = argument.join(', ')
    } else {
      pass = argument === type
      arg = argument
    }

    return {
      message: () => `Expected "${received}" to be type: ${arg}`,
      pass: pass
    }
  },

  toBeBetween (received, min, max) {
    const pass = (received >= min && received <= max)
    return {
      message: () => `Expected "${received}" to be between: ${min} " and ${max}"`,
      pass: pass
    }
  }
})