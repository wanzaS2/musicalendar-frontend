import react from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@material-ui/core/TextField';

import {useNavigate} from "react-router-dom";

function AddForm(){
    const navigate = useNavigate();

    return(
        <>
            <Container>
                <Modal>
                    <h1>
                        <EditIcon /> &nbsp;일정 추가하기
                    </h1>
                    <hr />
                    <TextField
                        style={{ marginBottom: '3rem' }}
                        label='날짜를 추가해주세요'
                        type='datetime-local'
                        defaultValue='0000-00-00T00:00'
                        InputLabelProps={{
                            shrink: true,
                        }}
                        // inputRef={dateTime}
                    />
                    <input
                        type='text'
                        style={{
                            borderRadius: '5px',
                            border: '1px solid #888',
                            padding: '16px',
                            fontSize: '16px',
                            marginBottom: '3rem',
                        }}
                        placeholder='일정을 입력해주세요.'
                        // ref={plan}
                    />

                    <BtnGroup>
                        <Button
                            variant='contained'
                            style={{ marginRight: '50px' }}
                            onClick={() => {
                                // props.history.goBack();
                                navigate('/mycalendar')
                            }}
                        >
                            뒤로가기
                        </Button>
                        <Button
                            variant='contained'
                            color='primary'
                            style={{ marginTop: '5px' }}
                            // onClick={addContent}
                        >
                            일정 추가
                        </Button>
                    </BtnGroup>
                </Modal>
            </Container>
            <Container2
                onClick={() => {
                    // props.history.replace('/');
                }}
            />
        </>
    )
}

export default AddForm;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const Modal = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 24px 50px;
  border-radius: 4px;
  width: 800px;
  height: 400px;
  box-sizing: border-box;
  z-index: 10;
  & h1 {
    text-align: center;
    color: #af7ac5;
  }
  & Button {
    min-width: 200px;
  }
`;
const BtnGroup = styled.div`
  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    & Button {
      width: 100%;
    }
  }
`;