export default function Header({count}) {
    return (
      <div className='header'>
        <h4>Shopping Cart Task</h4>
        <button class="btn btn-outline-dark" type="submit">
          <i class="bi-cart-fill me-1"></i>
          Cart
          <span class="badge bg-dark text-white ms-1 rounded-pill">{count}</span>
        </button>
      </div>)
  }

