class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: %i[ show update destroy ]


  #GET users/:uuid/user_role
  def user_role
    @user = User.find_by(uuid: params[:uuid])
    if @user
      render json: { role: @user.role }
    else
      render json:  { error: "User not found" }, status: :not_found
    end
  end

  # GET /users
  def index
    @users = User.all
    users_hash = @users.as_json
    users_hash.each do |user|
      user['id'] = user['uuid']
      user.delete('uuid')
    end
    render json: users_hash
  end

  # GET /users/<uuid>
  def show
    if @user
      user = @user.as_json
      user['id'] = user['uuid']
      user.delete('uuid')
      render json: user
    else
      render json: {error: 'User not found'}, status: :not_found
    end
  end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user, status: :created, location: api_v1_user_url(@user)
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/<uuid>
  def update
    if @user
      if @user.update(user_params)
        render json: @user
      else
        render json: @user.errors, status: :unprocessable_entity
      end
    else
      render json: {error: 'User not found'}, status: :not_found
    end
  end

  # DELETE /users/<uuid>
  def destroy
    if @user
      @user.destroy!
    else
      render json: {error: 'User not found'}, status: :not_found
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find_by(uuid: params[:uuid])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:name, :email, :password, :phone, :city_id, :role)
    end
end
