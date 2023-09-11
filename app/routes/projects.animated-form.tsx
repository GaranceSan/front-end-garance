import { type LinksFunction } from "@remix-run/node";
import animatedFormStyles from "~/styles/projects/animated-form.css";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: animatedFormStyles,
  },
];

export default function AnimatedForm() {
  const email = "Email";
  const password = "Password";

  return (
    <>
      <div className="form-container">
        <form className="form-box">
          <h1>Log in</h1>

          <div className="form-control">
            <input type=" text" required />
            <label>
              {email.split("").map((letter, i) => (
                <span key={i} style={{ transitionDelay: `${i * 30}ms` }}>
                  {letter}
                </span>
              ))}
            </label>
          </div>

          <div className="form-control">
            <input type="password" required />
            <label>
              {password.split("").map((letter, i) => (
                <span key={i} style={{ transitionDelay: `${i * 30}ms` }}>
                  {letter}
                </span>
              ))}
            </label>
          </div>

          <button className="btn">Login</button>

          <p className="text">
            Don't have an account ? <a href="#">Register</a>
          </p>
        </form>
      </div>
    </>
  );
}
