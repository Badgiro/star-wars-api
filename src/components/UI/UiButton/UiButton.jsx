import PropTypes from 'prop-types'
import styles from './UiButton.module.css'
import cn from 'classnames'
import '../index.css'
const UiButton = ({ children, disabled, swapPage, theme='dark', classes }) => {
  return (
    <button className={cn(styles.button, styles[theme])} disabled={disabled} onClick={swapPage}>
      {children}
    </button>
  )
}
UiButton.propTypes = {
children: PropTypes.string,
disabled: PropTypes.bool,
swapPage: PropTypes.func,
theme: PropTypes.string
}
export default UiButton
