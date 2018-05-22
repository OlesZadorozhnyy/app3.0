defmodule Myapp.Schema.Types do
  use Absinthe.Schema.Notation
  use Absinthe.Ecto, repo: Myapp.Repo
 
  object :category do
    field :id, :id
    field :title, :string
    field :inserted_at, :string
    field :news, list_of(:news), resolve: assoc(:news)
  end
 
  object :news do
    field :id, :id
    field :category_id, :integer
    field :title, :string
    field :description, :string
    field :text, :string
    field :is_top, :boolean
    field :inserted_at, :string
    field :time, :string, resolve: &Myapp.NewsResolver.time/3
    field :category, :category, resolve: assoc(:category)
  end

  input_object :news_data do
    field :category_id, :string
    field :title, :string
    field :description, :string
    field :text, :string
    field :is_top, :boolean
  end
end