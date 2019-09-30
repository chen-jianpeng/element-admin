import Mock from "mockjs";
import user from "./user";

const mocks = [...user];

export default function InitMock() {
  mocks.forEach(mock => {
    Mock.mock(mock.url, mock.type || "get", mock.response);
  });
}
