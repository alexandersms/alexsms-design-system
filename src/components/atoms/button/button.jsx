import PropTypes from 'prop-types'

const Button = ({ children, href, onClick }) => {
  if (!href) return <button onClick={onClick}>{children}</button>;
  return <a href={href}>{children}</a>;
};

Button.propTypes = {
    children: PropTypes.isRequired,
    href: PropTypes.string,
    onClick: PropTypes.func
}

export default Button;
