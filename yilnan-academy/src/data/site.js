// Contact details and facts used across the whole site. Change them here once.
export const CONTACT = {
  phoneDisplay: '+234 816 408 3309',
  whatsapp: '2348164083309',
  email: 'david@yilnanglobal.com',
  area: 'Mazaram Topp, Rayfield, Jos, Plateau State',
  address: 'No. 4, Yildum Close, Off Da Dung Jok Road, Mazaram Topp, Rayfield, Jos',
}

export const ENROLMENT = {
  opens: 'January 2027',
  classesStart: 'after the 2027 general elections',
}

export const waLink = (text) =>
  `https://wa.me/${CONTACT.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`
