defmodule Myapp.Router do
  use Myapp.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  forward "/api", Absinthe.Plug,
  schema: Myapp.Schema
 
  forward "/graphiql", Absinthe.Plug.GraphiQL,
  schema: Myapp.Schema

  scope "/", Myapp do
    pipe_through :browser # Use the default browser stack

    get "/*path", NewsController, :index
  end

  # Other scopes may use custom stacks.
  # scope "/api", Myapp do
  #   pipe_through :api
  # end
end
