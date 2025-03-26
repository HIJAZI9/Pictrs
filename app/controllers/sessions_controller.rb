class SessionsController < ApplicationController

  def new
  end
  def create
    @user = User.find_by(username: params[:username])
    if @user.present? && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      redirect_to root_url

    else
      # set flash Message for wrong login "Incorrect username or password"
      flash.now[:notice] = "Incorrect username or password"
      render :new, status: :unprocessable_entity
    end
  end


  def destroy
    session[:user_id] = nil
    redirect_to logout_url
  end


  private

  def login_params
    params.permit(:username, :password)
  end

end