var React = require('react'),
    {Link} = require('react-router'),

    Examples = (props) => {
      return(
        <div className="text-center">
          <h1 className="page-title">Examples</h1>
          <p>Try these example locations:</p>
          <ol>
            <li>
              <Link to='/?location=fort+lauderdale'> Fort Lauderdale, FL</Link>
            </li>
            <li>
              <Link to='/?location=bogota'>Bogot&aacute;, Colombia</Link>
            </li>
            <li>
              <Link to='/?location=hamburg'>Hamburg, Germany</Link>
            </li>
          </ol>
        </div>
      );
    };

module.exports = Examples;
