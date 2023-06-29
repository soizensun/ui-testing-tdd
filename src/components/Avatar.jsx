import { PersonOutlined } from "../icons";
import PropTypes from 'prop-types';


export default function Avatar({ src, size, children, style, ...props }) {
    return (
        <div {...props}
            style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "inset 0 0 0 1px rgba(0 0 0 / 0.08)",
                borderRadius: "50%",
                width: 80,
                height: 80,
                fontSize: 24,
                fontWeight: 500,
                ...(size === "sm" && {
                    width: 50,
                    height: 50,
                }),
                ...style
            }}
            role={src ? undefined : "img"}>
            {src ? <img style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
            }}
                src={src} /> : children || <PersonOutlined />}
        </div>
    )
}

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