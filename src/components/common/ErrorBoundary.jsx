import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service here
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            padding: '2rem',
            textAlign: 'center',
            color: 'red',
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          Something went wrong loading this page.
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
