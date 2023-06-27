import {useState, useEffect} from 'react';
const dayjs = require('dayjs');
let relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);


export default function withTimePretty() {
	return function (Component) {
		function AddRelativeTime(props) {
			const [time, setTime] = useState()

			useEffect(() => {
				setTime(() => dayjs().to(dayjs(props.date)))
			}, [])

			return <Component {...props} date={time} />
		}
		
		const name = Component.displayName || Component.name || 'Component';
		AddRelativeTime.displayName = `WithData${name}`;
		
		return AddRelativeTime
	}
}