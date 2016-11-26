var React = require('react'),
    {Link} = require('react-router'),

    Examples = (props) => {
      return(
        <div className="text-center">
          <h1 className="page-title">Examples</h1>
          <p>Try these example locations:</p>
          <ol>
            <li>
              <Link to='/?location=Fort+Lauderdale'> Fort Lauderdale, FL</Link>
            </li>
            <li>
              <Link to='/?location=Bogot&aacute;'>Bogot&aacute;, Colombia</Link>
            </li>
            <li>
              <Link to='/?location=Hamburg'>Hamburg, Germany</Link>
            </li>
          </ol>
        </div>
      );
    };

module.exports = Examples;
