import React from 'react'

const Nav = () => {
    return (
        <>
            <div className='row bg-primary'>
                <div className='col-sm-12 col-md-3'>
                    <div className='nav'>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
                            <i class="bi bi-list text-white fw-bold fs-3"></i>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/">Home</a></li>
                                <li><a class="dropdown-item" href="/gaming">Gaming</a></li>
                                <li><a class="dropdown-item" href="/music">Music</a></li>
                                <li><a class="dropdown-item" href="/utility">Utility</a></li>
                                <li><a class="dropdown-item" href="/productivity">Productivity</a></li>
                                <li><a class="dropdown-item" href="/entertainment">Entertainment</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#">Sign in</a></li>
                            </ul>
                        </li></div>
                </div>
                <div className='col-sm-12 col-md-6'>
                    <h3 className='text-center text-white bg-primary pt-2'>Telegram Bots And Channel</h3>
                </div>
                <div className='col-sm-12 col-md-3'></div>
            </div>

        </>
    )
}

export default Nav