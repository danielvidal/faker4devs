import faker from 'faker/locale/pt_BR'

class FakeGenerator {
  static randomize = (n) => Math.round(Math.random() * n)

  static mod = (dividend, divisor) =>  Math.round(dividend - (Math.floor(dividend / divisor) * divisor))

  static generateCPF = () => {
    let n = 9
  	let n1 = this.randomize(n)
   	let n2 = this.randomize(n)
   	let n3 = this.randomize(n)
   	let n4 = this.randomize(n)
   	let n5 = this.randomize(n)
   	let n6 = this.randomize(n)
   	let n7 = this.randomize(n)
   	let n8 = this.randomize(n)
   	let n9 = this.randomize(n)
   	let d1 = n9 * 2 + n8 * 3 + n7 * 4 + n6 * 5 + n5 * 6 + n4 * 7 + n3 * 8 + n2 * 9 + n1 * 10
    d1 = 11 - this.mod(d1, 11)
   	if (d1 >= 10) d1 = 0
   	let d2 = d1 * 2 + n9 * 3 + n8 * 4 + n7 * 5 + n6 * 6 + n5 * 7 + n4 * 8 + n3 * 9 + n2 * 10 + n1 * 11
   	d2 = 11 - this.mod(d2, 11)
   	if (d2 >= 10) d2 = 0

   	return '' + n1 + n2 + n3 + '.' + n4 + n5 + n6 + '.' + n7 + n8 + n9 + '-' + d1 + d2
  }

  static generateCNPJ = () => {
    let n = 9
		let n1  = this.randomize(n)
	 	let n2  = this.randomize(n)
	 	let n3  = this.randomize(n)
	 	let n4  = this.randomize(n)
	 	let n5  = this.randomize(n)
	 	let n6  = this.randomize(n)
	 	let n7  = this.randomize(n)
	 	let n8  = this.randomize(n)
	 	let n9  = 0
	 	let n10 = 0
	 	let n11 = 0
	 	let n12 = 1
		let d1 = n12 * 2 + n11 * 3 + n10 * 4 + n9 * 5 + n8 * 6 + n7 * 7 + n6 * 8 + n5 * 9 + n4 * 2 + n3 * 3 + n2 * 4 + n1 * 5
	 	d1 = 11 - this.mod(d1, 11)
	 	if (d1>=10) d1 = 0
	 	let d2 = d1 * 2 + n12 * 3 + n11 * 4 + n10 * 5 + n9 * 6 + n8 * 7 + n7 * 8 + n6 * 9 + n5 * 2 + n4 * 3 + n3 * 4 + n2 * 5 + n1 * 6
	 	d2 = 11 - this.mod(d2, 11)
	 	if (d2 >= 10) d2 = 0

		return '' + n1 + n2 + '.' + n3 + n4 + n5 + '.' + n6 + n7 + n8 + '/' + n9 + n10 + n11 + n12 + '-' + d1 + d2
  }

  static generatePersonName = () => faker.name.findName()

  static generatePersonPhone = () => faker.phone.phoneNumber()

  static generateNumber = (min, max) => {
    let range = { min: parseInt(min), max: parseInt(max) }
    return faker.random.number(range)
  }

  static copyToClipboard = text => {
    if (window.clipboardData && window.clipboardData.setData) {
      return window.clipboardData.setData('Text', text)
    } else if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
      let textarea = document.createElement('textarea')
      textarea.textContent = text
      textarea.style.position = 'fixed'
      document.body.appendChild(textarea)
      textarea.select()
      try {
        return document.execCommand('copy')
      }
      catch (ex) {
        console.warn('Copy to clipboard failed.', ex)
        return false
      }
      finally {
        document.body.removeChild(textarea)
      }
    }
  }
}

export default FakeGenerator
