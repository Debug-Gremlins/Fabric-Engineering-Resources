import styled from 'styled-components';
export const ResourceArea = styled.div`
  margin-top: 200px;
  margin-bottom: 20px;
  .content {
    text-align: left;
  }
  h1 {
    font-size: 30px;
    color: #0c253a;
  }
  p {
    color: #e0245e;
    font-size: 22px;
  }
  .btn {
    margin-top: 5px;
  }
  @media (max-width: 991px) {
    h1 {
      font-size: 26px;
    }
    h4 {
      font-size: 20px;
    }
    p {
      font-size: 18px;
    }
    @media (max-width: 767px) {
      .card {
        margin-bottom: 25px;
        align-items: unset;
      }
    }
  }
`;
