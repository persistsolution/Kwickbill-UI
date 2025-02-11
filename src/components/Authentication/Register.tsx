import { FC, Fragment, useState } from 'react';
import ALLImages from '../../common/ImageData';
import { Link } from 'react-router-dom';
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap';

interface ComponentProps { }

const Register: FC<ComponentProps> = () => {

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [visiblePassword, setVisiblePassword] = useState(false);
    const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false);

    const toggleVisibilityPassword = () => {
        setVisiblePassword(!visiblePassword);
    };

    const toggleVisibilityConfirmPassword = () => {
        setVisibleConfirmPassword(!visibleConfirmPassword);
    };

    return (
        <Fragment>
            <div className="">
                <div className="text-center">
                    <Link to={`${import.meta.env.BASE_URL}Dashboard/IndexPage/`}><img src={ALLImages('logo1')} className="header-brand-img m-0" alt="" /></Link>
                </div>
            </div>
            <div className="container-lg">
                <Row className="mt-4 justify-content-center mx-0">
                    <Col xl={4} lg={6}>
                        <Card className="shadow-none">
                            <Card.Body className="p-sm-6">
                                <div className="text-center mb-4">
                                    <h4 className="mb-1">Sign Up</h4>
                                    <p>Sign up to your account to continue.</p>
                                </div>
                                <Row>
                                    <Col sm={12}>
                                        <div className="mb-3">
                                            <Form.Label className="mb-2 fw-500">Full Name<span className="text-danger ms-1">*</span></Form.Label>
                                            <Form.Control className="ms-0" type="text" placeholder="Enter First Name" />
                                        </div>
                                    </Col>
                                    <Col sm={12}>
                                        <div className="mb-3">
                                            <Form.Label className="mb-2 fw-500">Email<span className="text-danger ms-1">*</span></Form.Label>
                                            <Form.Control className="ms-0" type="email" placeholder="Enter your Email" />
                                        </div>
                                    </Col>
                                    <Col sm={12}>
                                    <div className="mb-3">
                                        <label className="mb-2 fw-500">Create a Password<span className="text-danger ms-1">*</span></label>
                                        <InputGroup className="has-validation">
                                            <Form.Control type={visiblePassword ? 'text' : 'password'} className="ms-0 border-end-0" placeholder="Create a Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                            <Button variant="light" onClick={toggleVisibilityPassword}>
                                                {visiblePassword ? (<i className="ri-eye-off-line align-middle"></i>) : (<i className="ri-eye-line align-middle"></i>)}
                                            </Button>
                                            <div className="invalid-feedback">Please choose a password.</div>
                                        </InputGroup>
                                    </div>
                                    </Col>
                                    <Col sm={12}>
                                    <div className="mb-3">
                                        <label className="mb-2 fw-500">Confirm Password<span className="text-danger ms-1">*</span></label>
                                        <InputGroup className="has-validation">
                                            <Form.Control type={visibleConfirmPassword ? 'text' : 'password'} className="ms-0 border-end-0" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                                            <Button variant="light" onClick={toggleVisibilityConfirmPassword}>
                                                {visibleConfirmPassword ? (<i className="ri-eye-off-line align-middle"></i>) : (<i className="ri-eye-line align-middle"></i>)}
                                            </Button>
                                            <div className="invalid-feedback">Passwords do not match.</div>
                                        </InputGroup>
                                    </div>
                                    </Col>
                                    <Col xl={12}>
                                        <div className="form-check mb-3">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                            <label className="form-check-label tx-15" htmlFor="flexCheckChecked">Remember me</label>
                                        </div>
                                        <div className="d-grid mb-3">
                                            <Link to={`${import.meta.env.BASE_URL}Dashboard/IndexPage/`} className="btn btn-primary"> Create an Account</Link>
                                        </div>
                                        <div className="text-center">
                                            <p className="mb-0 tx-14">Already have an account ?
                                                <Link to={`${import.meta.env.BASE_URL}Authentication/LogIn`} className="tx-primary ms-1 text-decoration-underline">Login</Link>
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                                <p className="text-center mt-3 mb-2">Signup with</p>
                                <div className="d-flex justify-content-center">
                                    <div className="btn-list">
                                        <button className="btn btn-icon bg-primary-transparent rounded-pill border-0" type="button">
                                            <span className="btn-inner--icon"><i className="fa fa-facebook-f"></i></span>
                                        </button>
                                        <button className="btn btn-icon bg-primary-transparent rounded-pill border-0" type="button">
                                            <span className="btn-inner--icon"><i className="fa fa-google"></i></span>
                                        </button>
                                        <button className="btn btn-icon bg-primary-transparent rounded-pill border-0" type="button">
                                            <span className="btn-inner--icon"><i className="ri-twitter-x-fill"></i></span>
                                        </button>
                                        <button className="btn btn-icon bg-primary-transparent rounded-pill border-0" type="button">
                                            <span className="btn-inner--icon"><i className="fa fa-linkedin"></i></span>
                                        </button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={9} className="d-none"></Col>
                </Row>
            </div>
        </Fragment>
    );
};

export default Register;