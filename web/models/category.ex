defmodule Myapp.Category do
  use Myapp.Web, :model

  schema "categories" do
    field :title, :string
    has_many :news, Myapp.News

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:title])
    |> validate_required([:title])
    |> validate_length(:title, max: 100)
  end
end