defmodule Myapp.Repo.Migrations.CreateNewsTable do
	use Ecto.Migration

	def change do
		create table(:news) do
			add :category_id, :integer
			add :title, :string, size: 200
			add :description, :text
			add :text, :text
			add :is_top, :boolean, default: :false

			timestamps()
		end
	end
end
