defmodule Myapp.Repo.Migrations.CreateCategoriesTable do
	use Ecto.Migration

	def change do
		create table(:categories) do
			add :title, :string, size: 100

			timestamps()
		end
	end
end
