import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './QuickTestIntro.css';
import * as actions from '../../../store/actions/actions';

import Banner from '../../../assets/img/vn-test-your-english-banner.jpg';

const quickTestIntro = (props) => {
    return (
        <Container className="QuickTestIntro pt-3 rounded">
            <div className="QuickTestIntro-Title pl-4 mb-2">
                <h3>Kiểm tra trình độ tiếng Anh của bạn</h3>
            </div>

            <img src={Banner} alt="Test English Skill Banner"/>

            <h4 className="py-4">Kiểm tra trình độ tiếng Anh của bạn</h4>
            <p>Đây là một bài kiểm tra nhanh trực tuyến miễn phí. Nó sẽ giúp các bạn tìm được cho mình kỳ thi Cambridge English phù hợp nhất.</p>
            <p>Hãy nhấp vào 'Bắt đầu bài kiểm tra' và trả lời từng câu hỏi.</p>
            <ul>
                <li>Có 25 câu hỏi trắc nghiệm.</li>
                <li>Không giới hạn thời gian.</li>
                <li>Bạn có thể sẽ thấy đáp án ở cuối bài kiểm tra.</li>
            </ul>
            <div className="QuickTestIntro-Button mb-4">
                <Link to="/quick-test-exam" onClick={props.onFetchQuestions}>
                    <div className="QuickTestIntro-Btn rounded bg-primary">
                        <div className="QuickTestIntro-Btn-info">
                            <p>General English</p>
                            <p>Bắt đầu bài kiểm tra</p>
                        </div>
                        <i className="fa fa-user fa-4x" aria-hidden="true"></i>
                    </div>
                </Link>
                <Link to="/quick-test-exam" onClick={props.onFetchQuestions}>
                    <div className="QuickTestIntro-Btn rounded bg-danger">
                        <div className="QuickTestIntro-Btn-info">
                            <p>General English</p>
                            <p>Bắt đầu bài kiểm tra</p>
                        </div>
                        <i className="fa fa-building fa-4x" aria-hidden="true"></i>
                    </div>
                </Link>
            </div>
            <p>Vui lòng lưu ý: <i>Đây không phải là bài thi Cambridge English, điểm và cấp độ kiểm tra chỉ mang tính tương đối. Điểm số bài kiểm tra này của bạn không được sử dụng như một chứng chỉ ngôn ngữ chính thức.</i></p>
        </Container>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchQuestions: () => dispatch(actions.onFetchQuestion()),
    }
}

export default connect(null, mapDispatchToProps)(quickTestIntro);