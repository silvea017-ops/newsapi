import { createContext, useReducer, useState } from "react";

export const NewsContext = createContext({
  news: [],
  fetchNews: () => {},
});

export function NewsProvider({ children }) {
  /**
   * 3가지 상태
   * 1. 로딩중일때
   * 2. 성공했을때
   * 3. 실패했을때
   *
   * useReducer
   * - 여러가지 상태를 한번에 다룰때 사용
   */
  const initState = {
    news: [],
    isLoading: false,
    error: null,
  };
  /**
   * 1. 이전상태값
   * 2. 실행 타입(로딩,성공,에러)
   */

  const LOADING = "LOADING";
  const SUCCESS = "SUCCESS";
  const ERROR = "ERROR";

  function newsReducer(state, action) {
    switch (action.type) {
      case LOADING:
        return { isLoading: true, error: null, news: [] };
      case SUCCESS:
        return { isLoading: false, error: null, news: action.payload };
      case ERROR:
        return { ...state, isLoading: false, error: action.payload };
      default:
        return state;
    }
  }

  const [newsState, dispatch] = useReducer(newsReducer, initState);

  async function fetchNews(callStatus, query) {
    const key = import.meta.env.VITE_NEWS_API_KEY;
    const country = "us";
    let api_url = `https://newsapi.org/v2/${callStatus}`;

    if (callStatus === "top-headlines") {
      api_url += `?country=${country}&apiKey=${key}`;
    } else {
      api_url += `?q=${query}&sortBy=popularity&apiKey=${key}`;
    }

    try {
      dispatch({ type: LOADING });
      const response = await fetch(api_url);

      // throw new Error("에러가 발생했습니다");
      response.json().then((data) => {
        dispatch({ type: SUCCESS, payload: data.articles });
      });
    } catch (error) {
      dispatch({ type: ERROR, payload: error.message });
    }

    // console.log(data.articles);
  }

  const value = { newsState, fetchNews };

  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
}
