defmodule Myapp.Schema do
  use Absinthe.Schema
  import_types Myapp.Schema.Types
 
  query do
    field :categories, list_of(:category) do
      resolve &Myapp.CategoryResolver.all/2
    end

    field :category, type: :category do
      arg :id, non_null(:id)
      resolve &Myapp.CategoryResolver.find/2
    end

    field :news, list_of(:news) do
      resolve &Myapp.NewsResolver.all/2
    end
 
    field :simple_news, list_of(:news) do
      arg :limit, non_null(:integer)
      resolve &Myapp.NewsResolver.findSimpleNews/2
    end

    field :top_news, list_of(:news) do
      arg :limit, non_null(:integer)
      resolve &Myapp.NewsResolver.findTop/2
    end

    field :news_item, type: :news do
      arg :id, non_null(:id)
      resolve &Myapp.NewsResolver.find/2
    end
  end
end