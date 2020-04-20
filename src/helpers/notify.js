import { notification } from "antd"

notification.config({
    placement: 'topLeft',
})

const notify = (message,type,setting) => {
    notification[type]({
        message,
        ...setting
    })
}

export default notify