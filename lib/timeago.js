import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

TimeAgo.addLocale(en)

const timeago = new TimeAgo('en-US')

export default timeago
