/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Header } from "./Header";
import { HomePage } from "./HomePage";

import { fontFamily, fontSize, gray2 } from "./Styles";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AskPage } from "./AskPage";
import { SearchPage } from "./SearchPage";
import { SignInPage } from "./SignInPage";
import { NotFoundPage } from './NotFoundPage';
import { QuestionPage } from './QuestionPage';

function App() {
  return (
    <BrowserRouter>
      <div
        css={css`
          font-family: ${fontFamily};
          font-size: ${fontSize};
          color: ${gray2};
        `}
      >
        <Header />
        <Routes>
          <Route path="" element={<HomePage></HomePage>} />
          <Route path="search" element={<SearchPage></SearchPage>} />
          <Route path="ask" element={<AskPage></AskPage>} />
          <Route path="signin" element={<SignInPage></SignInPage>} />
          <Route path="questions/:questionId" element={<QuestionPage></QuestionPage>} />
          <Route path="*" element={<NotFoundPage></NotFoundPage>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
