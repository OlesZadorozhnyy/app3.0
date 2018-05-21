defmodule Myapp.NewsResolver do
	import Ecto.Query

	alias Myapp.Repo
	alias Myapp.News

	def all(_args, _info) do
		{:ok, Repo.all(News)}
	end

	def find(%{id: id}, _info) do
		case Repo.get(News, id) do
			nil -> {:error, "News id #{id} not found"}
			news -> {:ok, news}
		end
	end

	def findSimpleNews(%{limit: limit}, _info) do
		findNews(:false, limit)
	end

	def findTop(%{limit: limit}, _info) do
		findNews(:true, limit)
	end

	def time(%{inserted_at: insertedAt}, _args, _resolution) do
		numberFormat = fn item -> item |> Integer.to_string() |> String.pad_leading(2, "0") end

		time = "#{numberFormat.(insertedAt.hour)}:#{numberFormat.(insertedAt.minute)}"

		{:ok, time}
	end

	defp findNews(isTop, limit) do
		query = from n in News,
			where: n.is_top == ^isTop,
			order_by: [desc: n.inserted_at],
			limit: ^limit

		{:ok, Repo.all(query)}
	end
end