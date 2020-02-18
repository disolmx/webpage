import { useIntl } from 'react-intl'
import { labels } from '../../data'

export default (name) => {
    const intl = useIntl()
    return intl.formatMessage(labels[name])
}