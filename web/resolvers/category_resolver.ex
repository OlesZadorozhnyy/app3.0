defmodule Myapp.CategoryResolver do
	alias Myapp.Repo
	alias Myapp.Category

	def all(_args, _info) do
		{:ok, Repo.all(Category)}
	end
end