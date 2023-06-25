import { PersonOutlined } from "../icons";
import PropTypes from 'prop-types';

export const Avatar = ({ src, children, size, style, ...props }) => {
  return (
    <div
      {...props}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "inset 0 0 0 1px rgba(0 0 0 / 0.08)",
        borderRadius: "50%",
        width: 70,
        height: 70,
        fontSize: 24,
        fontWeight: 500,
        letterSpacing: "1px",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        ...(size === "sm" && {
          width: 40,
          height: 40,
        }),
        ...style,
      }}
      role={src ? undefined : "img"}
    >
      {src ? (
        <img
          src={src}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
          }}
        />
      ) : (
        children || <PersonOutlined />
      )}
    </div>
  );
};

Avatar.propTypes = {
  src: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'lg']),
  style: PropTypes.object,
  children: PropTypes.string
};

Avatar.defaultProps = {
  src: null,
  size: "sm",
  style: null,
};

