import {render, screen, waitFor} from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

beforeEach(() => {
    // sets everything back to initial state before each test
    fetch.resetMocks();
});

test("receives GitHub name from GitHub REST API using jest fetch mock", async () => {
    fetch.mockResponseOnce(JSON.stringify({name: "Prashant Kumar"}));
    render(<App />);
    const gitHubName = await waitFor(() =>
        screen.getByRole("heading", {level: 2})
    );
    expect(gitHubName).toHaveTextContent("Prashant Kumar");
});

test("Github profile button link", async () => {
    fetch.mockResponseOnce(
        JSON.stringify({html_url: "https://github.com/prashantkumar1113"})
    );
    render(<App />);

    const gitHubUrl = await waitFor(() => screen.getByRole("link"));

    expect(gitHubUrl).toHaveAttribute(
        "href",
        "https://github.com/prashantkumar1113"
    );
});
